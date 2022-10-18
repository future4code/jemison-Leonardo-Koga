import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './HomePage';
import ListTripsPage from './ListTripsPage';
import ApllicationFormPage from './ApplicationFormPage';
import LoginPage from './LoginPage';
import AdminHomePage from './AdminHomePage';
import CreateTripPage from './CreateTripPage';
import TripDetailsPage from './TripDetailsPage';

 
function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <HomePage /> }/>
                <Route path="/trips/list" element={ <ListTripsPage /> } />
                <Route path="/trips/application" element={ <ApllicationFormPage /> } /> 
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/admin/trips/list" element={ <AdminHomePage /> }/>
                <Route path="/admin/trips/create" element={ <CreateTripPage /> }/>
                <Route path="/admin/trips/:id" element={ <TripDetailsPage /> }/>
            </Routes>
        </BrowserRouter>

    )
}

export default Router