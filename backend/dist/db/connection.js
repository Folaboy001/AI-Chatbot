import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Can not Connect To MongoDB");
    }
}
;
async function disconnectFromDataBase() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Can not Disonnect From MongoDB");
    }
}
;
export { connectToDatabase, disconnectFromDataBase };
//# sourceMappingURL=connection.js.map