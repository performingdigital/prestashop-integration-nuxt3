# Experimental Nuxt 3 Prestashop Integration

This project is based on the Nuxt 2 integration for VSF and you can find it [here](https://github.com/vuestorefront-community/prestashop/)


## Requirements:

- NodeJS v16 or later,
- Pnpm

## Getting started

```bash
pnpm install
```

Run the project,

```bash
pnpm run dev
```

## Status 

- [ ] addNewAddress
- [ ] addReview
- [ ] addToCart
- [x] bootstrap
- [ ] fetchOrders
- [ ] getAvailableCountries
- [x] getCartItems
- [x] getCategoryProducts
- [x] productSearch
- [ ] getPaymentMethods
- [ ] getProduct
- [ ] getReview
- [ ] getShippingMethods
- [ ] loadAddresses
- [ ] loadCustomer
- [x] login
- [x] logout
- [x] makeOrder
- [x] register
- [ ] removeAddress
- [ ] removeFromCart
- [ ] setAddress
- [ ] setShippingMethod
- [x] updateCart
- [ ] updateCustomer
- [ ] updateOneAddress

## Repository structure

This repository contains a few necessary packages to help you get started building your new integration:

- `apps/app` - Demonstrates the usage of `prestashop/api-client` by creating a nuxt 3 app. You can use this directory to demonstrate the usage of the integration.
- `apps/middleware` - An express app that uses the `prestashop/api-client` to create a server-to-server connection with service providers (e.g. commerce backend).
- `packages/api-client` - The service the middleware uses. It contains some of the implemented endpoints.
- `packages/sdk`- Think of the SDK Connector as a communication layer between the storefront and the middleware. It contains some implemented methods.

## Would you like to contribute?

This is an open-source project. Feel free to contribute by creating a new issue or submitting a pull request. 

This is a created from the new [integration boilerplate for VSF 2 integrations](https://github.com/vuestorefront/integration-boilerplate) based on the SDK.
