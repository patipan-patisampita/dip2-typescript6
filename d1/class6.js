class AppContext {
    AppContext() {
    }
    static getInstance() {
        return AppContext._instance;
    }
    getData() {
        return "test data";
    }
}
AppContext._instance = new AppContext();
let data = AppContext.getInstance().getData();
console.log(data);
