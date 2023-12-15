import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() { 
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name
            )
            if (userAccount) {
                return this.login({ email, password })
            }
            else {
                return userAccount
            }
        }
        catch (error) {
            this.error;
        }
    }
    async login({ email, password }) {
        try {
            const userAccount = await this.account.createSession(email, password
            )
            if (userAccount) {

            }
            else {
            }
        }
        catch (error) {
            this.error;
        }
    }
    async getCurerntUser(){
        try {
           return await this.account.get()
        }
        catch (error) {
            this.error;
        }
        return null
    }
    async logout(){
        try {
            return await this.account.deleteSessions("current")
        }
        catch (error) {
            this.error;
        }
    }

}
const authService = new AuthService();


export default authService