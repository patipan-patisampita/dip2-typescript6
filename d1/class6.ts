class AppContext {
    private static _instance: AppContext = new AppContext();

    private AppContext() {
    }

    public static getInstance(): AppContext {
        return AppContext._instance;
    }

    getData(): any {
        return "test data"
    }
}

let data = AppContext.getInstance().getData();
console.log(data);