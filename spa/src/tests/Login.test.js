import {BrowserRouter} from "react-router-dom";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {Login} from "../components/Login";

test("rendering correct login form", () => {
    render(<BrowserRouter>
        <Login/>
    </BrowserRouter>);

    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Password/i);
    const submitButton = screen.getByRole('button', {name: 'Sign in'});

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

test("correct login process", async () => {
    render(<BrowserRouter>
        <Login/>
    </BrowserRouter>);

    fireEvent.change(screen.getByPlaceholderText(/Email/i), {target: {value: 'test@example.com'}});
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {target: {value: 'password123'}});

    // Mock the fetch request
    const loginSpy = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: () =>
            Promise.resolve({
                first_name: 'John',
                last_name: 'Doe',
                username: 'johndoe',
                email: 'test@example.com',
                phone: '1234567890',
                user_status: 'user',
                user_id: '123456',
                token: 'token123'
            })
    });

    // Submit the form
    fireEvent.click(screen.getByRole('button', {name: 'Sign in'}));
    expect(loginSpy).toHaveBeenCalledWith('http://127.0.0.1:5000/user/login', expect.anything());

    // Verify that the local storage has been set
    const setItemSpy = jest.spyOn(localStorage, "setItem");
    await waitFor(() => expect(localStorage.setItem).toHaveBeenCalledTimes(9)); // wait until the localStorage.setItem spy has been called 9 times before proceeding to the expectations

    expect(setItemSpy).toHaveBeenNthCalledWith(1, 'first_name', 'John');
    expect(setItemSpy).toHaveBeenNthCalledWith(2, 'last_name', 'Doe');
    expect(setItemSpy).toHaveBeenNthCalledWith(3, 'username', 'johndoe');
    expect(setItemSpy).toHaveBeenNthCalledWith(4, 'email', 'test@example.com');
    expect(setItemSpy).toHaveBeenNthCalledWith(5, 'phone', '1234567890');
    expect(setItemSpy).toHaveBeenNthCalledWith(6, 'user_session', "True");
    expect(setItemSpy).toHaveBeenNthCalledWith(7, 'user_status', 'user');
    expect(setItemSpy).toHaveBeenNthCalledWith(8, 'user_id', '123456');
    expect(setItemSpy).toHaveBeenNthCalledWith(9, 'token', 'token123');
})


