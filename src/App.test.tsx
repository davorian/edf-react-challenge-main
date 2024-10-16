import {render, screen, fireEvent, act, waitFor} from "@testing-library/react"
import App from "./App.tsx"
import {country} from "./types.ts"
import {CountryProvider} from "./context/CountryContext.tsx"
import {VITE_COUNTRIES_URL} from "./constants.ts"

test("renders search input and button", () => {
  render(<CountryProvider _loading={true}><App /></CountryProvider>)
  const inputElement = screen.getByPlaceholderText(/Search/i)
  const buttonElement = screen.queryByRole("button", { name: /search/i })
  expect(inputElement).toBeInTheDocument()
  expect(buttonElement).toBeInTheDocument()
})

test("displays loading info message initially",  async () => {
    global.fetch = jest.fn(() => Promise.resolve([country])) as jest.Mock

        render(<CountryProvider _loading={false}><App /></CountryProvider>)

    act(() => {
        const buttonElement = screen.getByRole("button", { name: /search/i })
        fireEvent.click(buttonElement)
    })


    await waitFor(() => {
        const alert =  screen.queryByRole("alert")
        expect(alert).toHaveTextContent(/Loading/i)
    })
})

test("displays no results message on no results found",  async () => {
    global.fetch = jest.fn( () => Promise.resolve([])) as jest.Mock

    render(<CountryProvider _loading={false} _url={`${VITE_COUNTRIES_URL}engl`}><App/></CountryProvider>)

    act( () => {
        const buttonElement = screen.getByRole("button", { name: /search/i })
        fireEvent.click(buttonElement)
    })

    await waitFor(() => {
        const alert =  screen.queryByRole("alert")
        expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
        expect(alert).toHaveTextContent(/No results/i)
    })

})

test("displays error message on api fail",  async () => {
    global.fetch = jest.fn( () => Promise.reject("API is down!")) as jest.Mock

        render(<CountryProvider _loading={false}><App/></CountryProvider>)

     act( () => {
        const buttonElement = screen.getByRole("button", { name: /search/i })
        fireEvent.click(buttonElement)
    })

    await waitFor(() => {
        const alert =  screen.queryByRole("alert")
        expect(screen.queryByText('Loading...')).not.toBeInTheDocument()
        expect(alert).toHaveTextContent(/Error!/i)
    })

})

