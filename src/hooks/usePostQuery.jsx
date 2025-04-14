import { useMutation, useQueryClient } from "react-query";
import { request } from "../services/request";
import { toast } from "react-toastify";


const postRequest = (url, attributes, config = {}) => request.post(url, attributes, config);

const usePostQuery = ({ hideSuccessToast = false, listKeyId = null } = {}) => {
    const queryClient = useQueryClient();

    const { mutate, isLoading, isError, error } = useMutation(
        ({ url, attributes, config = {} }) => postRequest(url, attributes, config),
        {
            onSuccess: (data) => {
                if (!hideSuccessToast) {
                    toast.success(data?.data?.message || 'SUCCESS');
                }
                // if (listKeyId) {
                //   queryClient.invalidateQueries(listKeyId);
                // }
            },
            onError: (error) => {
                console.log(error);
                toast.error('ERROR');
            }
        }
    );

    return {
        postRequest,
        mutate,
        isLoading,
        isError,
        error
    };
};

export default usePostQuery;
