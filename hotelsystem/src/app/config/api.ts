import { environment } from 'src/environments/environment'

export const baseUrl= environment.production ? 'https://api.shoppingcart.com': 'http://localhost:3000'
export const productionUrl = baseUrl + '/products'
export const cartUrl = baseUrl + '/cart'
