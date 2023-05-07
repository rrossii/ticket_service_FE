import React from "react";

export function isAdmin() {
    const user_status = localStorage.getItem("user_status" || "");
    if (user_status === "admin") {
        return true;
    }
}
export function isUser() {
    const user_status = localStorage.getItem("user_status" || "");
    if (user_status === "user") {
        return true;
    }
}