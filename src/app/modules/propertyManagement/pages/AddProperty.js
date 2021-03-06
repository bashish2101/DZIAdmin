import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useParams, Redirect, Link, useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Select from "react-select";
import {
  Card,
  CardHeader,
  CardBody,
} from "../../../../_metronic/_partials/controls";
import * as Yup from "yup";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import { createPropertyAsync } from "../redux/propertyManagementApi"

/* import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete"; */

const AddProperty = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [file, setFile] = useState({ file: null, url: "" });
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });

  const {
    addProperty
  } = useSelector((state) => state.propertyManagement, shallowEqual);

  const redirectBack = () => {
    history.push("/property-management");
  }

  const validationSchema = Yup.object().shape({
    propertyName: Yup.string()
      .trim()
      .required("Please enter Property name"),
    propertyType: Yup.string()
      .trim()
      .notOneOf(
        ["null", "NULL", "Null", "Undefined", "undefined"],
        "Please enter Property type"
      )
      .required("Please enter Property type"),
    propertyStatus: Yup.string()
      .trim()
      .notOneOf(
        ["null", "NULL", "Null", "Undefined", "undefined"],
        "Please enter Property status"
      )
      .required("Please enter Property status"),
    propertyAddress: Yup.string()
      .trim()
      .required("Please enter Property address"),
    nftCode: Yup.string()
      .trim()
      .required("Please enter NFT code"),
    basePrice: Yup.string()
      .trim()
      .required("Please enter base price"),
  });

  const initialValues = {
    propertyName: "",
    propertyIcon: "",
    propertyType: "",
    propertyStatus: "",
    propertyAddress: "",
    nftCode: "",
    basePrice: ""
  };

  const uploadImage = (e) => {
    setFile({
      url: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0],
    });
  };

  const propertyType = [{
    value: "OFFICE",
    label: "OFFICE",
  }, {
    value: "RESIDENTIAL",
    label: "RESIDENTIAL",
  }, {
    value: "HOTEL",
    label: "HOTEL",
  }, {
    value: "MUSEUM",
    label: "MUSEUM",
  }, {
    value: "SHOP",
    label: "SHOP",
  }]

  const propertyStatus = [{
    value: "AVAILABLE",
    label: "AVAILABLE",
  }, {
    value: "AUCTIONED",
    label: "AUCTIONED",
  }, {
    value: "KILLED",
    label: "KILLED",
  }, {
    value: "MONUMENT",
    label: "MONUMENT",
  }, {
    value: "HOT_PROPERTY",
    label: "HOT_PROPERTY",
  }]


  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {

          let formData = null
          if (file && file.file) {
            formData = new FormData();
            formData.append("propertyIcon", file.file);
          }

          dispatch(createPropertyAsync(values, formData, resetForm, redirectBack))
        }}

      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleBlur,
          handleChange,
          setFieldValue,
          setFieldTouched,
        }) => (
          <Card>
            <CardHeader
              title={
                <div className="form-group m-0 d-flex align-items-center">
                  <Link className="btn btn-link px-0" to="/property-management">
                    <SVG
                      className="h-50 align-self-center"
                      src={toAbsoluteUrl(
                        "/media/svg/icons/Navigation/Arrow-left.svg"
                      )}
                    />
                    Back
                  </Link>
                  <span className="pl-2">
                    Add Property
                  </span>
                </div>
              }
            ></CardHeader>
            <CardBody>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <Form>
                    <div className="form-group">
                      <label className="form-label">Property name</label>
                      <input
                        placeholder="Enter Property"
                        type="text"
                        name="propertyName"
                        className={
                          errors.propertyName && touched.propertyName
                            ? "form-control re_inputRouded is-invalid"
                            : "form-control re_inputRouded"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.properyName}
                      />
                      {touched.propertyName && errors.propertyName ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            {errors.propertyName}
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Property icon</label>
                      <input
                        className="form-control"
                        type="file"
                        name="propertyIcon"
                        onChange={uploadImage}
                        value={values.propertyIcon}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Property type</label>

                      <Select
                        value={{
                          value: values.propertyType,
                          label: values.propertyType,
                        }}
                        placeholder="Select type"
                        className={`form-control border-0 p-0 `}
                        classNamePrefix="phoSelect"
                        name="propertyType"
                        options={propertyType}
                        onChange={(e) => {
                          setFieldValue("propertyType", e.value);
                        }}

                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary25: "#DCF4E4",
                            primary75: "#DCF4E4",
                            primary50: "#DCF4E4",
                            primary: "#50C878",
                          },
                        })}
                      />
                      {touched.propertyType && errors.propertyType ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{errors.propertyType}</div>
                        </div>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Property status</label>

                      <Select
                        value={{
                          value: values.propertyStatus,
                          label: values.propertyStatus,
                        }}
                        placeholder="Select status"
                        className={`form-control border-0 p-0 `}
                        classNamePrefix="phoSelect"
                        name="propertyStatus"
                        options={propertyStatus}
                        onChange={(e) => {
                          setFieldValue("propertyStatus", e.value);
                        }}

                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary25: "#DCF4E4",
                            primary75: "#DCF4E4",
                            primary50: "#DCF4E4",
                            primary: "#50C878",
                          },
                        })}
                      />
                      {touched.propertyStatus && errors.propertyStatus ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{errors.propertyStatus}</div>
                        </div>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Property address</label>

                      {/* <PlacesAutocomplete
                        value={address || values.propertyAddress}
                        onChange={(e) => {
                          setFieldValue(e.value)
                          setAddress(e.value)
                        }}
                        onSelect={handleSelect}
                        name="propertyAddress"
                      >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                          <div>
                            <p>Latitude: {coordinates.lat}</p>
                            <p>Longitude: {coordinates.lng}</p>

                            <input {...getInputProps({ placeholder: "Type address" })} />

                            <div>
                              {loading ? <div>...loading</div> : null}

                              {suggestions.map(suggestion => {
                                const style = {
                                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                };

                                return (
                                  <div {...getSuggestionItemProps(suggestion, { style })}>
                                    {suggestion.description}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </PlacesAutocomplete> */}


                      <input
                        placeholder="Enter Address"
                        type="text"
                        name="propertyAddress"
                        className={
                          errors.propertyAddress && touched.propertyAddress
                            ? "form-control re_inputRouded is-invalid"
                            : "form-control re_inputRouded"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.propertyAddress}
                      />
                      {touched.propertyAddress && errors.propertyAddress ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            {errors.propertyAddress}
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <label className="form-label">NFT code</label>
                      <input
                        placeholder="Enter NFT code"
                        type="text"
                        name="nftCode"
                        className={
                          errors.nftCode && touched.nftCode
                            ? "form-control re_inputRouded is-invalid"
                            : "form-control re_inputRouded"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nftCode}
                      />
                      {touched.nftCode && errors.nftCode ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            {errors.nftCode}
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Base price</label>
                      <input
                        placeholder="Enter base price"
                        type="number"
                        name="basePrice"
                        className={
                          errors.basePrice && touched.basePrice
                            ? "form-control re_inputRouded is-invalid"
                            : "form-control re_inputRouded"
                        }
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.basePrice}
                      />
                      {touched.basePrice && errors.basePrice ? (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            {errors.basePrice}
                          </div>
                        </div>
                      ) : null}
                    </div>

                    <div className="form-group d-flex flex-wrap justify-content-center align-items-center mb-0 mt-4">
                      <div className="mr-5 mb-1 mt-2">
                        <Link
                          className="btn btn-outline-blue"
                          to="/property-management"
                        >
                          Close
                        </Link>
                      </div>
                      <div className="mb-1 mt-2">
                        <Button
                          variant="blue"
                          className="px-5 defpddng spinnerBtn"
                          size="lg"
                          type="submit"
                        >
                          Submit
                          {addProperty && (
                            <div className="ml-3 basic-verification-loader text-center">
                              <CircularProgress />
                            </div>
                          )}
                        </Button>
                      </div>
                    </div>
                  </Form>
                </Col>
              </Row>
            </CardBody>
          </Card>
        )}
      </Formik>
    </>
  );
};
export default AddProperty;
