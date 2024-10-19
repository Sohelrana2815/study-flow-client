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
import MySubmittedAssignment from "../Pages/MySubmittedAssignment/MySubmittedAssignment";

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
          fetch(`http://localhost:5000/assignments/${params.id}`),
      },
      {
        path: "assignmentDetails/:id",
        element: (
          <PrivateRoute>
            <AssignmentDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/assignments/${params.id}`),
      },
      {
        path: "mySubmittedAssignment",
        element: (
          <PrivateRoute>
            <MySubmittedAssignment />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
