import helloWorld from "../functions/index.js";

export default function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
