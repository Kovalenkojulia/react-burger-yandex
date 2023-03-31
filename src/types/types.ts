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

export interface ICreateOrderPayload {
    ingredients: string[];
}
export interface ILoginFormValues {
    email: string;
    password: string;
}

export interface IUserEmail {
    email: string
}
export interface IUser {
    email: string
    name: string
}

export interface IUserRegister {
    email: string
    name: string
    password: string
}

export interface IPasswordResetPayload {
    password: string;
    token: string;
}

export interface IUserAuthStatusResponse {
    success: boolean;
    message: string;
}

export interface IUserAuthSuccessResponse {
    success: boolean;
}

export interface IUserAuthSuccessTokenResponse
    extends IUserAuthSuccessResponse {
    accessToken: string;
    refreshToken: string;
}

export interface IIngredientWithUUID extends IIngredient {
    uuid: string;
}

