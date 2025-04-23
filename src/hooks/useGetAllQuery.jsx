import { useQuery } from "react-query";
import { request } from "../services/request";

const useGetAllQuery = ({
    url = "/",
    key = "get-all",
    params = {},
    enabled = true
}) => {

    const { data, error, isLoading, refetch } = useQuery({
        queryKey: [key, params],
        queryFn: () =>
            request.get(url, {
                params
            }),
        enabled,
        onSuccess: (data) => {
        },
        onError: (err) => {
            console.log(err)
        }
    })

    return {
        isLoading,
        data,
        error,
        refetch
    }
}

export default useGetAllQuery