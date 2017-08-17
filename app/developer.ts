class Developer {
    department: string;
    private _title: string;

    get title(): string {
        return this._title;
    }
    set title(newTitle: string) {
        this._title = newTitle.toUpperCase();
    }

    //You don't use the function keyword to define methods for classes
    documentRequirements(requirements: string): void {
        console.log(requirements);
    }
}