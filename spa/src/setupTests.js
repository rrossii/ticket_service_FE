// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

beforeAll(() => {
    // Mock the localStorage object
    const localStorageMock = {
        setItem: jest.fn(),
        getItem: jest.fn(),
    };

    // Set the localStorage object globally
    Object.defineProperty(window, "localStorage", { value: localStorageMock });
});

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//         useNavigate: jest.fn(),
// }));
