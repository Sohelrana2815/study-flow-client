import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import StudyTasksForm from "../Pages/StudyTasksComponent/StudyTasksForm";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import Assignments from "../Pages/Assignments/Assignments";
import UpdateAssignments from "../Pages/UpdateAssignments/UpdateAssignments";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";

import GiveMark from "../Pages/GiveMark/GiveMark";
import Dashboard from "../Dashboard/Dashboard";
import AdminRoute from "./AdminRoute/AdminRoute";
import AcademyAdmin from "../Pages/Dashboard/AcademyAdmin/AcademyAdmin";
import Home from "../Pages/Home/Home/Home";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import StudentDashboard from "../Pages/Dashboard/StudentDashboard/StudentDashboard";
import MainLayout from "../Layout/MainLayout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },

      {
        path: "studyTasksForm",
        element: (
          <PrivateRoute>
            <StudyTasksForm />
          </PrivateRoute>
        ),
      },
      {
        path: "assignments",
        element: <Assignments />,
        loader: () =>
          fetch("https://study-flow-server.vercel.app/assignmentsCount"),
      },
      {
        path: "createAssignments",
        element: (
          <PrivateRoute>
            <CreateAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "updateAssignment/:id",
        element: (
          <PrivateRoute>
            <UpdateAssignments />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://study-flow-server.vercel.app/specificAssignment/${params.id}`
          ),
      },
      {
        path: "assignmentDetails/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://study-flow-server.vercel.app/specificAssignment/${params.id}`
          ),
      },

      {
        path: "giveMark/:id",
        element: (
          <PrivateRoute>
            <GiveMark />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://study-flow-server.vercel.app/specificSubmittedAssignment/${params.id}`
          ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // Normal user dashboard / routes
      {
        path: "studentDashboard",
        element: (
          <PrivateRoute>
            <StudentDashboard />
          </PrivateRoute>
        ),
      },

      // Admin routes / dashboard
      {
        path: "academyAdmin",
        element: (
          <AdminRoute>
            <AcademyAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
