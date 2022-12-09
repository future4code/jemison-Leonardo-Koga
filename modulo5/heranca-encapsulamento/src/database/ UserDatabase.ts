import { purchases } from './data';
import { BaseDatabase } from "./BaseDatabase";
import { User } from '../models/User';
import { Product } from "../models/Product";
import { Purchase } from '../models/Purchase';

export class  UserDatabase extends BaseDatabase{
   static TABLE_USERS = "Labe_Users";
   static TABLE_PRODUCTS = "Labe_Products";
   static TABLE_PURCHASES = "Labe_Purchases";

    public getAllUsers = async(): Promise<User[]> => {
        return await BaseDatabase.connection(UserDatabase.TABLE_USERS).select();
    };

    public getAllProducts = async(): Promise<Product[]> => {
        return await BaseDatabase.connection(UserDatabase.TABLE_PRODUCTS).select();
    };

    public getAllUserPurchases = async(id:string): Promise<Purchase[]> => {
        return await BaseDatabase.connection(UserDatabase.TABLE_PURCHASES).select().where({id});
    };

    public static createUser = async(user: User):Promise<void> => {
        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(user);
    };

    public static createProduct = async(products: Product):Promise<void> => {
        await BaseDatabase.connection(UserDatabase.TABLE_PRODUCTS).insert(products);
    };

    public static createPurchase = async(purchases: Purchase):Promise<void> => {
        await BaseDatabase.connection(UserDatabase.TABLE_PURCHASES).insert(purchases);
    };

    public getUserById = async(id:string):Promise<User>=> {
        const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS)
        .select()
        .where({id});

        return result[0];
    };

   
};

