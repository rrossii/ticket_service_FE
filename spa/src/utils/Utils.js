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

export function isLoggedIn() {
    const user_session = localStorage.getItem("user_session");
    return user_session === "True";
}

export function categoriesArray() {
    const categ = ["Theater", "Festival", "Sport", "Concert"];
    const res = [];

    for (let i = 0; i < categ.length; i++) {
        res.push(<option type="string" value={categ[i]}>{categ[i]}</option>);
    }
    return res;
}

export function findCategoryNameByItsId(category_id) { // для того аби при редагуванні квитка дістати його категорію, оскільки в базі дних збергігається category_id а не category
    const categ = ["Theater", "Festival", "Sport", "Concert"];

    try {
        return categ[category_id - 1];
    } catch (e) {
        alert(e);
    }
}
export function getDaysInMonth(y, m) {
    const date = new Date(y, m, 1);
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
}

export function daysArray(year, month) {
    const daysInMonth = getDaysInMonth(year, month);
    const days = []

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(<option type="number" value={i}>{i}</option>);
    }

    return days;
}

export function hoursArray() {
    const hours = []
    for (let i = 0; i <= 23; i++) {
        hours.push(<option type="number" value={i}>{i}:00</option>);
    }

    return hours;
}