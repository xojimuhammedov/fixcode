import { useMutation } from "react-query";
import { request } from "../services/request";
import { toast } from "react-toastify";

const deleteRequest = (url) => request.delete(url)

const useDeleteQuery = () => {

    const { mutate, isLoading, error } = useMutation(({ url }) => deleteRequest(url), {
        onSuccess: (data) => {
            toast.success(data?.data?.message)
        },
        onError: (error) => {
            toast.error(error?.data?.message)
        }
    })

    return {
        mutate,
        isLoading,
        error
    }

}

export default useDeleteQuery
