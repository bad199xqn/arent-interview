import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { CloseIcon, LogoIcon } from "@/components/Icons";
import { Modal } from "@/components/Modal";

import { useSelector, useDispatch } from "react-redux";
import { authActions } from "@/store";
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});
const formOptions = { resolver: yupResolver(validationSchema) };

export function LoginModal() {
  const dispatch = useDispatch();
  const authError = useSelector((storeState: any) => storeState.auth.error);
  const navigate = useNavigate();

  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  const onSubmit = ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    return dispatch(authActions.login({ username, password }));
  };

  return (
    <>
      <Modal>
        <div className="flex flex-col justify-center px-6 py-8 bg-light w-80 relative">
          <div className="absolute top-2 right-2 cursor-pointer" onClick={() => navigate("/")}>
            <CloseIcon width={16} height={16} />
          </div>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <div className="w-full flex justify-center">
              <LogoIcon />
            </div>
            <div className="bg-primary-300 p-2 mt-4 rounded">
              <p className="text-xs tracking-tight">Username: duc</p>
              <p className="mt-1 text-xs tracking-tight">Password: 123456</p>
            </div>
          </div>
          <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    {...register("username")}
                    type="text"
                    autoComplete="text"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                  <p className="text-xs text-red-400">
                    {errors.username?.message}
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    {...register("password")}
                    type="password"
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  />
                  <p className="text-xs text-red-400">
                    {errors.password?.message}
                  </p>
                </div>
              </div>
              <div>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="mt-6 flex w-full justify-center text-light rounded-md px-3 py-1.5 text-sm font-semibold bg-gradient-to-tr from-primary-300 to-primary-400 hover:bg-gradient-to-r hover:from-primary-400 hover:to-primary-300"
                >
                  Log in
                </button>
                {authError && (
                  <div className="bg-red-200 mt-3 mb-0 text-sm p-2 rounded">
                    {authError.message}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
