import {Page, Locator} from "@playwright/test";

export class GitHubPage{
    //1. khai báo page và các Locator
    private page: Page;
    readonly searchButton: Locator;
    readonly searchBox: Locator;
    readonly signInLink: Locator;
    readonly signInHeading: Locator;

    //2. Constructor - khoi tạo các Locator
    constructor(page: Page){
        this.page = page;
        this.searchButton = page.getByRole('button', {name: /search or jump to/i});
        this.searchBox = page.getByPlaceholder(/Search or jump to/);
        this.signInLink = page.getByRole('link',{name: 'Sign in'});
        this.signInHeading = page.getByRole('heading',{name: 'Sign in'});
    }

    //3. Actions - Các hành động có thể thực hiện
    async goto(): Promise<void>{
        await this.page.goto('https://github.com');
    }

    async clickSignIn(): Promise<void>{
        await this.signInLink.click();
    }

    async searchFor(keyword: string): Promise<void>{
        await this.searchButton.click();
        await this.searchBox.fill(keyword);
    }
    
}