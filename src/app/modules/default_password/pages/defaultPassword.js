import React, { useEffect } from 'react';
import {
    Card,
    CardHeader,
    CardBody
} from "./../../../../_metronic/_partials/controls";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getDefaultPasswordAsync, setDefaultPasswordAsync } from '../redux/defaultPasswordApi';

export function DefaultPassword() {

    const dispatch = useDispatch();

    const { defaultPassword } = useSelector((state) => state.defaultPassword, shallowEqual);

    useEffect(() => {
        dispatch(getDefaultPasswordAsync())
    }, [])

    const PasswordSchema = () =>
        Yup.object().shape({
            defaultPassword: Yup.string().trim()
                .min(3, "Minimum 3 characters")
                .max(50, "Maximum 50 characters")
                .required("Default password is required"),
        });

    const formik = useFormik({
        initialValues: {
            defaultPassword: defaultPassword
        },
        enableReinitialize: true,
        validationSchema: PasswordSchema,
        onSubmit: (values) => {
            dispatch(setDefaultPasswordAsync(values));
        },
    });

    return (
        <Card>
            <CardHeader title="Default Password Management"></CardHeader>
            <CardBody>
                <div className="tblmrgn mt-0 lwpddng cstm_pddng">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-md-6-as">
                            <form
                                className="form def_form frmwtpddng"
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="form-label">Set Default Password</label>
                                        <input
                                            placeholder="Set Default Password"
                                            type="text"
                                            className={`form-control`}
                                            name="defaultPassword"
                                            {...formik.getFieldProps("defaultPassword")}
                                        />
                                        {formik.touched.defaultPassword && formik.errors.defaultPassword ? (
                                            <div className="fv-plugins-message-container">
                                                <div className="fv-help-block">
                                                    {formik.errors.defaultPassword}
                                                </div>
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="form-group d-flex flex-wrap justify-content-center align-items-center mb-0">
                                    <div className="form-group mr-5 mb-1 mt-2">
                                        <button
                                            type="submit"
                                            className="btn btn-blue spinnerBtn"
                                        >
                                            <span>Save</span>
                                            {/* {isLoading && (
                                <div className="ml-3 basic-verification-loader text-center">
                                    <CircularProgress />
                                </div>
                            )} */}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}