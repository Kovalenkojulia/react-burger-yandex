export interface IIngredient {
    _id: string
    name: string
    type: string
    proteins: number
    fat: number
    carbohydrates: number
    calories: number;
    price: number
    image: string
    image_mobile: string;
    image_large: string;
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

export interface IOrderResponse {
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

export interface IOrder {
    _id: string;
    ingredients: string[];
    status: "done" | "pending" | "created";
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
}
export interface IFeedSuccessResponse {
    success: boolean;
    orders: IOrder[];
    total: number;
    totalToday: number;
}

export interface IFeedErrorResponse {
    success: boolean;
    message: string;
}

export interface IWSActions {
    onMessage: Function;
    onError: Function;
    open: Function;
    close: Function;
    initSocket: Function;
}

export interface IOrderStatuses {
    done: "Выполнен";
    pending: "Готовится";
    created: "Создан";
}
