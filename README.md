frontend-mentor ROCK PAPER SCISSORS challenge completed with react, ts, mui, jest, react testing library

Заготовки для редми:
    сложности с которыми я столкнулся при разработке приложения:
        1. Как правильно оборачивать storybook preview в mui и redux провайдеры (способ указанный в документации storybook не подходил):

        export const decorators = [
            // Adds global styles and theme switching support.
            withThemeFromJSXProvider({
                GlobalStyles: CssBaseline,
                // Uncomment for theme switching
                Provider: ThemeProvider,
                themes: {
                    // Provide your custom themes here
                    light: Theme,
                    // dark: darkTheme,
                },
                defaultTheme: "light",
            }),
        ];

        2. Как настроить redux для jest тестов https://redux.js.org/usage/writing-tests . Нужно создавать редукс стор заново для каждого теста