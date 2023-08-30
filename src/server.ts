import dotenv from "dotenv";
//import { myTextSubModule } from "./submodules-testmodule/utils.js";
//import { Bom } from "./submodule/models/Bom.js";
//import { custInt } from "./submodule/utilities/utils.js";
dotenv.config();
const ENV = process.env.ENV;

//let b: Bom = { customerId: "", userId: "", name: "" };
//console.log(b);
//console.log(custInt("45"));
console.log("serverts test " + ENV);
//console.log("text: " + myTextSubModule("test"));
