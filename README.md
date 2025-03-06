<p align="center">
  <a href="https://www.chromatic.com/">
    <img alt="Chromatic" src="https://avatars2.githubusercontent.com/u/24584319?s=200&v=4" width="60" />
  </a>
</p>

<h1 align="center">
  Chromatic's Intro to Storybook React Native template
</h1>

This template ships with the main React Native and Storybook configuration files you'll need to get up and running fast.

## 🚅 Quick start

1.  **Create the application.**

    Use [degit](https://github.com/Rich-Harris/degit) to get this template.

    ```shell
    # Clone the template
    npx degit chromaui/intro-storybook-react-native-template#main taskbox
    ```

1.  **Install the dependencies.**

    Navigate into your new site’s directory and install the necessary dependencies.

    ```shell
    # Navigate to the directory
    cd taskbox/

    # Install the dependencies
    yarn
    ```

1.  **Open the source code and start editing!**

    Open the `taskbox` directory in your code editor of choice and building your first component!

1.  **Browse your stories!**

    Run `yarn storybook:ios` for ios or `yarn storybook:android` for android to see your component's stories on your emulator or device.

## 🔎 What's inside?

A quick look at the top-level files and directories included with this template.

    .
    ├── .gitignore
    ├── LICENSE
    ├── README.md
    ├── App.jsx
    ├── app.config.js
    ├── yarn.lock
    ├── package.json
    ├── babel.config.js

1.  **`.gitignore`**: This file tells git which files it should not track or maintain during the development process of your project.

2.  **`LICENSE`**: The template is licensed under the MIT licence.

3.  **`README.md`**: A text file containing useful reference information about the project.

4. **`App.jsx`**: This is the entry point of your app.  

5. **`app.config.js`**: This is the configuration file for Expo that allows you to customize your app.

6. **`yarn.lock`**: This is an automatically generated file based on the exact versions of your npm dependencies that were installed.

## Contribute

If you encounter an issue with the template, we encourage you to open an issue in this template's repository.

## Learning Storybook

1. Read our introductory tutorial at [Learn Storybook](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/).
2. Learn how to transform your component libraries into design systems in our [Design Systems for Developers](https://storybook.js.org/tutorials/design-systems-for-developers/) tutorial.
3. See our official documentation at [Storybook](https://storybook.js.org/).

```
frigo-amigo-test
├─ .prettierrc
├─ .storybook
│  ├─ index.jsx
│  ├─ main.js
│  ├─ preview.css
│  ├─ preview.jsx
│  ├─ storybook.requires.js
│  └─ storybook.requires.ts
├─ .yarnrc.yml
├─ app.config.js
├─ App.tsx
├─ assets
│  ├─ fonts
│  └─ images
│     ├─ add-plus.svg
│     ├─ checkmark.svg
│     ├─ dropdown-arrow.svg
│     ├─ edit.svg
│     ├─ list.svg
│     ├─ minus.svg
│     ├─ place-product.svg
│     ├─ plus.svg
│     ├─ search.svg
│     └─ welcome-image.png
├─ babel.config.js
├─ dist
│  ├─ assets
│  │  ├─ 02bc1fa7c0313217bde2d65ccbff40c9
│  │  ├─ 069d99eb1fa6712c0b9034a58c6b57dd
│  │  ├─ 0747a1317bbe9c6fc340b889ef8ab3ae
│  │  ├─ 0a328cd9c1afd0afe8e3b1ec5165b1b4
│  │  ├─ 0ea69b5077e7c4696db85dbcba75b0e1
│  │  ├─ 1190ab078c57159f4245a328118fcd9a
│  │  ├─ 286d67d3f74808a60a78d3ebf1a5fb57
│  │  ├─ 2d0a9133e39524f138be6d4db9f4851f
│  │  ├─ 35ba0eaec5a4f5ed12ca16fabeae451d
│  │  ├─ 3ccf189874e82464a4233d9dccd41c97
│  │  ├─ 3cd68ccdb8938e3711da2e8831b85493
│  │  ├─ 4403c6117ec30c859bc95d70ce4a71d3
│  │  ├─ 4e2e23bf335d463aa05f8af62da9c897
│  │  ├─ 61ca7e64b7d605716c57706cef640b9a
│  │  ├─ 778ffc9fe8773a878e9c30a6304784de
│  │  ├─ 78c625386b4d0690b421eb0fc78f7b9c
│  │  ├─ 7d40544b395c5949f4646f5e150fe020
│  │  ├─ a132ecc4ba5c1517ff83c0fb321bc7fc
│  │  ├─ aff2c65b39a296d4f7e96d0f58169170
│  │  ├─ c3273c9e5321f20d1e42c2efae2578c4
│  │  ├─ c79c3606a1cf168006ad3979763c7e0c
│  │  ├─ d06dff3e2cb6c72b73819c6544241f57
│  │  ├─ d62ddc38b69aff346c20a28774933d6a
│  │  ├─ d84e297c3b3e49a614248143d53e40ca
│  │  ├─ d8e7601e3df962f83c62371ac14964d8
│  │  ├─ dad2fa9f4394a630f0f9a0d6dabd44bc
│  │  ├─ f3a81967828232c893d547162e922764
│  │  └─ src
│  │     └─ shared
│  │        └─ assets
│  │           └─ fonts
│  │              └─ Jost-Regular.3ccf189874e82464a4233d9dccd41c97.ttf
│  ├─ index.html
│  ├─ metadata.json
│  └─ _expo
│     └─ static
│        └─ js
│           ├─ android
│           │  └─ AppEntry-e2b5ac4a618007e7cdb4670f899f353b.hbc
│           ├─ ios
│           │  └─ AppEntry-71577d4df636e87addbd863a5a2de296.hbc
│           └─ web
│              └─ AppEntry-32a747e31c531ad4274a132852abafb6.js
├─ LICENSE
├─ metro.config.js
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ app
│  │  ├─ index.tsx
│  │  ├─ providers
│  │  │  └─ navigation
│  │  │     ├─ bottom-tab-navigator.tsx
│  │  │     ├─ index.ts
│  │  │     └─ main-stack.tsx
│  │  └─ store.ts
│  ├─ entities
│  │  ├─ product
│  │  │  ├─ model
│  │  │  │  ├─ product-model.ts
│  │  │  │  └─ product-slice.ts
│  │  │  ├─ types.ts
│  │  │  └─ ui
│  │  │     ├─ empty-fridge-message.tsx
│  │  │     └─ product-card.tsx
│  │  └─ user
│  │     ├─ model
│  │     │  ├─ selectors.ts
│  │     │  └─ user-slice.ts
│  │     └─ types.ts
│  ├─ features
│  │  ├─ add-product
│  │  │  ├─ index.ts
│  │  │  └─ ui
│  │  │     └─ add-product-modal.tsx
│  │  ├─ delete-product
│  │  │  ├─ index.ts
│  │  │  └─ ui
│  │  │     └─ confirm-delete-modal.tsx
│  │  ├─ edit-product
│  │  │  ├─ index.ts
│  │  │  └─ ui
│  │  │     └─ edit-product-modal.tsx
│  │  ├─ filter-product
│  │  │  ├─ index.ts
│  │  │  ├─ model
│  │  │  │  └─ filter-slice.ts
│  │  │  └─ ui
│  │  │     ├─ filter-button.tsx
│  │  │     └─ filter-panel.tsx
│  │  ├─ profile
│  │  │  └─ model
│  │  │     └─ use-profile.ts
│  │  ├─ search-product
│  │  │  ├─ index.ts
│  │  │  ├─ model
│  │  │  │  └─ search-slice.ts
│  │  │  └─ ui
│  │  │     ├─ search-bar.tsx
│  │  │     └─ search-button.tsx
│  │  └─ sort-product
│  │     ├─ index.ts
│  │     ├─ model
│  │     │  └─ sort-slice.ts
│  │     └─ ui
│  │        ├─ sort-button.tsx
│  │        └─ sort-panel.tsx
│  ├─ pages
│  │  ├─ add-product-page
│  │  │  ├─ index.ts
│  │  │  └─ ui
│  │  │     └─ add-product-page.tsx
│  │  ├─ fridge-page
│  │  │  ├─ index.ts
│  │  │  └─ ui
│  │  │     └─ fridge-page.tsx
│  │  ├─ profile-page
│  │  │  ├─ index.ts
│  │  │  └─ ui
│  │  │     └─ profile-page.tsx
│  │  ├─ recipes-page
│  │  │  ├─ index.ts
│  │  │  └─ ui
│  │  │     └─ recipes-page.tsx
│  │  ├─ shopping-list-page
│  │  │  ├─ index.ts
│  │  │  └─ ui
│  │  │     └─ shopping-list-page.tsx
│  │  └─ welcome-page
│  │     ├─ index.ts
│  │     └─ ui
│  │        └─ welcome-page.tsx
│  ├─ shared
│  │  ├─ assets
│  │  │  ├─ fonts
│  │  │  │  ├─ Jost-Medium.ttf
│  │  │  │  └─ Jost-Regular.ttf
│  │  │  └─ images
│  │  │     ├─ common
│  │  │     │  ├─ add-plus.svg
│  │  │     │  ├─ add-product.svg
│  │  │     │  ├─ checkmark.svg
│  │  │     │  ├─ close.svg
│  │  │     │  ├─ date-circle-green.svg
│  │  │     │  ├─ date-circle-orange.svg
│  │  │     │  ├─ date-circle-red.svg
│  │  │     │  ├─ delete.png
│  │  │     │  ├─ delete.svg
│  │  │     │  ├─ dropdown-arrow.svg
│  │  │     │  ├─ edit.svg
│  │  │     │  ├─ filter-gradient.svg
│  │  │     │  ├─ filter.svg
│  │  │     │  ├─ fridge-gradient.svg
│  │  │     │  ├─ fridge.svg
│  │  │     │  ├─ minus.svg
│  │  │     │  ├─ plus.svg
│  │  │     │  ├─ profile-gradient.svg
│  │  │     │  ├─ profile.svg
│  │  │     │  ├─ quantity-circle.svg
│  │  │     │  ├─ recipes-gradient.svg
│  │  │     │  ├─ recipes.svg
│  │  │     │  ├─ search-gradient.svg
│  │  │     │  ├─ search.svg
│  │  │     │  ├─ shopping-list-gradient.svg
│  │  │     │  ├─ shopping-list.svg
│  │  │     │  ├─ sort-gradient.svg
│  │  │     │  ├─ sort.svg
│  │  │     │  ├─ tabbar-circle.png
│  │  │     │  └─ welcome-image.png
│  │  │     ├─ icons-map.ts
│  │  │     ├─ index.ts
│  │  │     └─ product-icons
│  │  │        ├─ apple.svg
│  │  │        ├─ apricot.svg
│  │  │        ├─ banana.svg
│  │  │        ├─ bread.svg
│  │  │        ├─ broccoli.svg
│  │  │        ├─ cabachok.svg
│  │  │        ├─ cabbage.svg
│  │  │        ├─ candies.svg
│  │  │        ├─ canned-food.svg
│  │  │        ├─ carrot.svg
│  │  │        ├─ caulif.svg
│  │  │        ├─ celery.svg
│  │  │        ├─ cereal.svg
│  │  │        ├─ cucumber.svg
│  │  │        ├─ dairy.svg
│  │  │        ├─ drinks.svg
│  │  │        ├─ eggplant.svg
│  │  │        ├─ eggs.svg
│  │  │        ├─ fig.svg
│  │  │        ├─ fish-and-seafood.svg
│  │  │        ├─ fruits-and-berries.svg
│  │  │        ├─ garlic.svg
│  │  │        ├─ grape.svg
│  │  │        ├─ hot-pepper.svg
│  │  │        ├─ mango.svg
│  │  │        ├─ meat-and-sausages.svg
│  │  │        ├─ nuts.svg
│  │  │        ├─ onion.svg
│  │  │        ├─ orange.svg
│  │  │        ├─ peach.svg
│  │  │        ├─ pear.svg
│  │  │        ├─ pecin-cabbage.svg
│  │  │        ├─ pepper.svg
│  │  │        ├─ plum.svg
│  │  │        ├─ potato.svg
│  │  │        ├─ processed-food.svg
│  │  │        ├─ pumpkin.svg
│  │  │        ├─ radish.svg
│  │  │        ├─ red-onion.svg
│  │  │        ├─ repa.svg
│  │  │        ├─ sauces.svg
│  │  │        ├─ spices.svg
│  │  │        ├─ svekla.svg
│  │  │        ├─ tomato.svg
│  │  │        ├─ undefined.svg
│  │  │        └─ vegetables.svg
│  │  ├─ data
│  │  │  ├─ categories-icons.ts
│  │  │  ├─ categories.ts
│  │  │  ├─ product-icons.ts
│  │  │  └─ sort-options.ts
│  │  ├─ lib
│  │  │  └─ db
│  │  │     └─ index.ts
│  │  ├─ styles
│  │  │  └─ global.ts
│  │  ├─ types
│  │  │  └─ product.ts
│  │  ├─ ui
│  │  │  ├─ add-button
│  │  │  │  ├─ add-button.stories.tsx
│  │  │  │  ├─ add-button.tsx
│  │  │  │  └─ index.ts
│  │  │  ├─ checkbox
│  │  │  │  ├─ checkbox.stories.tsx
│  │  │  │  ├─ checkbox.tsx
│  │  │  │  └─ index.ts
│  │  │  ├─ edit-delete-panel
│  │  │  │  ├─ edit-delete-panel.tsx
│  │  │  │  └─ index.ts
│  │  │  ├─ icon
│  │  │  │  ├─ icon.stories.tsx
│  │  │  │  ├─ icon.tsx
│  │  │  │  └─ index.ts
│  │  │  ├─ icon-button
│  │  │  │  ├─ icon-button.stories.tsx
│  │  │  │  ├─ icon-button.tsx
│  │  │  │  └─ index.ts
│  │  │  ├─ index.ts
│  │  │  ├─ input
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ input.stories.tsx
│  │  │  │  └─ input.tsx
│  │  │  ├─ primary-button
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ primary-button.stories.tsx
│  │  │  │  └─ primary-button.tsx
│  │  │  ├─ radio
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ radio.stories.tsx
│  │  │  │  └─ radio.tsx
│  │  │  ├─ secondary-button
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ secondary-button.stories.tsx
│  │  │  │  └─ secondary-button.tsx
│  │  │  ├─ select
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ select.stories.tsx
│  │  │  │  └─ select.tsx
│  │  │  ├─ tabbar-button
│  │  │  │  ├─ index.ts
│  │  │  │  └─ tabbar-button.tsx
│  │  │  └─ text
│  │  │     ├─ index.ts
│  │  │     ├─ text.stories.tsx
│  │  │     └─ text.tsx
│  │  └─ utils
│  │     ├─ date-utils.ts
│  │     └─ product-utils.ts
│  └─ widgets
│     └─ product-list
│        ├─ index.ts
│        ├─ model
│        │  └─ product-list-model.ts
│        └─ ui
│           └─ product-list.tsx
├─ svg.d.ts
├─ tsconfig.json
└─ yarn.lock

```