import {render, screen} from "@testing-library/react";
import {Footer} from "../components/Footer";
import {BrowserRouter} from "react-router-dom";

test("footer with correct info", () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>);

    // Check logo icon
    const logo = screen.getByAltText(/logo-image/i)
    expect(logo).toBeInTheDocument();

    // social media icons
    const instIcon = screen.getByAltText(/inst-link/i)
    const fbIcon = screen.getByAltText(/fb-link/i)
    expect(instIcon).toBeInTheDocument();
    expect(fbIcon).toBeInTheDocument();

    // Check if the footer links are rendered correctly
    const concertLink = screen.getByText(/Concert/i);
    expect(concertLink).toBeInTheDocument();
    const festivalLink = screen.getByText(/Festival/i);
    expect(festivalLink).toBeInTheDocument();
    const theaterLink = screen.getByText(/Theater/i);
    expect(theaterLink).toBeInTheDocument();
    const sportLink = screen.getByText(/Sport/i);
    expect(sportLink).toBeInTheDocument();

    // Check if the contact information is rendered correctly
    const phoneNumber = screen.getByText("+38 098 4532 789");
    expect(phoneNumber).toBeInTheDocument();
    const email = screen.getByText(/info@ticketserve.com/i);
    expect(email).toBeInTheDocument();

})