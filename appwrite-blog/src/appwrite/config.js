import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client()
    Databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.Databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({
        title, slug,
        content, featuredImage, status, userId
    }) {
        try {
            return await this.Databases.createDocument(conf.appwriteBucketId, conf.appwriteCollectionId, slug, {
                title, content, featuredImage, status, userId
            })
        } catch (error) {
            console.log(error)
        }
    }
    async updatepost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId,
                slug, {
                title,
                content,
                featuredImage,
                status
            })
        } catch (error) {
            console.log(error)
        }
    }
    async deltePost(slug) {
        try {
            return await this.Databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId, slug)
            return true
        }
        catch (error) {
            console.log(error)
        }
    }
    async getPost(slug) {
        try {
            return await this.Databases.getDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }
        catch (error) {
            console.log(error)
        }
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal("status", "active")
                ]
            )
        }
        catch (error) {
            console.log(error)
            return false
        }
    }
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }
        catch (error) {
            console.log(error)
            return false
        }
    }
    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        }
        catch (error) {
            console.log(error)
            return false
        }
    }
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )

    }
}
const service = new Service()
export default Service