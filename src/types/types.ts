export interface IIngredient {
    _id: string
    name: string
    type: string
    proteins: number
    fat: number
    carbohydrates: number
    price: number
    image: string
}

export interface IIngredientWithUUID extends IIngredient {
    uuid: string;
}

export interface IUserEmail {
    email: string;
}

export interface IUser {
    email: string;
    name: string;
}

export interface IUserRegister extends IUser {
    password: string;
}

export interface ILoginFormValues {
    email: string;
    password: string;
}

export interface IOrder {
    success: boolean;
    name: string;
    order: {
        number: number;
    };
}

export interface IUserAuthStatusResponse {
    success: boolean;
    message: string;
}

interface IUserAuthSuccessResponse {
    success: boolean;
}

export interface IUserAuthSuccessTokenResponse
    extends IUserAuthSuccessResponse {
    accessToken: string;
    refreshToken: string;
}

export interface IUserAuthSuccessUserResponse
    extends IUserAuthSuccessTokenResponse {
    user: IUser;
}

export interface IUserAuthSuccessCurrentUserResponse
    extends IUserAuthSuccessResponse {
    user: IUser;
}

export interface IFetchWithRefreshOptions {
    headers: {
        [name: string]: string;
    };
    method: string;
    body?: string;
}

export interface ICategoriesNames {
    [name: string]: string;
}

export interface IFillingDragIndexes {
    dragIndex: number;
    hoverIndex: number;
}

export interface IPasswordResetPayload {
    password: string;
    token: string;
}

export interface ICreateOrderPayload {
    ingredients: string[];
}
