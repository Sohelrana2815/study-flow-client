import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import StudyTasksForm from "../Pages/StudyTasksComponent/StudyTasksForm";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import CreateAssignments from "../Pages/CreateAssignments/CreateAssignments";
import Assignments from "../Pages/Assignments/Assignments";
import UpdateAssignments from "../Pages/UpdateAssignments/UpdateAssignments";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";
import MySubmittedAssignments from "../Pages/MySubmittedAssignments/MySubmittedAssignments";
import PendingAssignment from "../Pages/PendingAssignment/PendingAssignment";
import GiveMark from "../Pages/GiveMark/GiveMark";
import Dashboard from "../Layout/Dashboard/Dashboard";

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
        element: (
          <PrivateRoute>
            <Assignments />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/assignmentsCount"),
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
        element: <UpdateAssignments />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/specificAssignment/${params.id}`),
      },
      {
        path: "assignmentDetails/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/specificAssignment/${params.id}`),
      },
      {
        path: "mySubmittedAssignments",
        element: (
          <PrivateRoute>
            <MySubmittedAssignments />
          </PrivateRoute>
        ),
      },
      {
        path: "pendingAssignments",
        element: (
          <PrivateRoute>
            <PendingAssignment />
          </PrivateRoute>
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
            `http://localhost:5000/specificSubmittedAssignment/${params.id}`
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
        element: <UserHome />,
      },

      // Admin routes / dashboard
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
