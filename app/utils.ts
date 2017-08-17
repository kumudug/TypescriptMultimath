class Utils {

    /*static getInputValue(elementId: string): string | undefined {
        let inputElement = <HTMLInputElement>document.getElementById(elementId);

        if (inputElement.value === '') {
            return undefined;
        } else {
            return inputElement.value;
        }
    }*/

    static getInputValue(elementId: string): string {
        let inputElement = <HTMLInputElement>document.getElementById(elementId);

        return inputElement.value;
    }

}