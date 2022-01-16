import { enviornment } from "../../constants/constants";
// import { addPackageAsync } from '../../modules/createnewproject/createProjectRedux/createProject.api';

// import { createInvestmentOnChainAsync, getProjectByIdAsync, offerStatusChangeByInvestorAsync, statusChangeByProjectCreatorAsync } from "../../modules/product/productRedux/product.api";
import { launchSaleAsync } from "../web3Redux/web3.api";

function getInstance(web3) {

    return new Promise(async (resolve, reject) => {
        if (web3 && web3 != '') {
            try {
                let Instance = await new web3.eth.Contract(
                    enviornment.ERC20ABI,
                    enviornment.ERC20Address
                );

                if (Instance) {
                    resolve(Instance);
                } else {
                    reject({ error: "Issue with instance" });
                }
            } catch (error) {
                reject(error);
            }
        }
    });
};

function getBalance(ercInstance, walletAddress) {
    return new Promise(async (resolve, reject) => {
        try {
            return await ercInstance.methods
                .balanceOf(walletAddress)
                .call({ from: walletAddress }, (err, data) => {

                    if (err) {
                        reject({ error: err });
                    } else {
                        if (data > 0) {
                            resolve(parseFloat(data / enviornment.divideValue).toFixed(2));
                        } else {
                            resolve(data)
                        }
                    }

                });
        } catch (error) {
            reject(error);
        }
    });
};

function approveProject(ercInstance, walletAddress, data) {
    return new Promise(async (resolve, reject) => {
        try {
            return await ercInstance.methods
                .approveProject(data.projectId)
                .send({ from: walletAddress })
                .on("receipt", function (receipt) {
                    resolve(receipt);
                })
                .on("error", function (error, receipt) {
                    reject({ error: error });
                });
        } catch (error) {
            reject(error);
        }
    });
}

function setBonusScores(ercInstance, walletAddress, data) {
    console.log({ ercInstance, walletAddress, data })
    return new Promise(async (resolve, reject) => {
        try {
            console.log("in12")
            return await ercInstance.methods
                .setBonusScores(data.projectId, data.packageId, data.collaborators, data.scores)
                .send({ from: walletAddress })
                .on("receipt", function (receipt) {
                    console.log({ receipt })
                    resolve(receipt);
                })
                .on("error", function (error, receipt) {
                    console.log({ error })
                    reject({ error: error });
                });
        } catch (error) {
            resolve(error);
        }
    });
}

function getMgp(ercInstance, walletAddress, data) {
    console.log({ walletAddress, data })
    return new Promise(async (resolve, reject) => {
        try {
            return await ercInstance.methods
                .getMgp(data.projectId, data.packageId)
                .send({ from: walletAddress }, (err, data) => {
                    if (err) {
                        reject({ error: err });
                    } else {
                        if (data > 0) {
                            resolve(parseFloat(data / enviornment.divideValue).toFixed(2));
                        } else {
                            resolve(data)
                        }
                    }
                });
        } catch (error) {
            reject(error);
        }
    });
};

function getBonus(ercInstance, walletAddress, data) {
    console.log({ walletAddress, data })
    return new Promise(async (resolve, reject) => {
        try {
            return await ercInstance.methods
                .getBonus(data.projectId, data.packageId)
                .send({ from: walletAddress }, (err, data) => {
                    if (err) {
                        reject({ error: err });
                    } else {
                        if (data > 0) {
                            resolve(parseFloat(data / enviornment.divideValue).toFixed(2));
                        } else {
                            resolve(data)
                        }
                    }
                });
        } catch (error) {
            reject(error);
        }
    });
};

function approvePayment(ercInstance, walletAddress, data) {
    console.log({ walletAddress, data })
    return new Promise(async (resolve, reject) => {
        try {
            return await ercInstance.methods
                .approvePayment(data.projectId, data.packageId)
                .send({ from: walletAddress })
                .on("receipt", function (receipt) {
                    resolve(receipt);
                })
                .on("error", function (error, receipt) {
                    reject({ error: error });
                });
        } catch (error) {
            resolve(error);
        }
    });
}

function rejectPayment(ercInstance, walletAddress, data) {
    console.log({ ercInstance, walletAddress, data })
    return new Promise(async (resolve, reject) => {
        try {
            return await ercInstance.methods
                .rejectPayment(data.projectId, data.packageId, data.collaborator)
                .send({ from: walletAddress })
                .on("receipt", function (receipt) {
                    resolve(receipt);
                })
                .on("error", function (error, receipt) {
                    reject({ error: error });
                });
        } catch (error) {
            resolve(error);
        }
    });
}

export const poolMethods = {
    getInstance,
    approveProject,
    setBonusScores,
    getMgp,
    getBonus,
    approvePayment,
    rejectPayment
}