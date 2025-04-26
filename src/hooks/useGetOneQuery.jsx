import { useQuery } from "react-query";
import { request } from "../services/request";

const useGetOneQuery = ({
    url = "/",
    key = "get-one",
    params = {},
    enabled = true,
}) => {
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: [key, params],
        queryFn: async () => {
            const response = await request.get(url, { params });
            return response?.data; // faqat kerakli data return qilamiz
        },
        enabled,
        onSuccess: (data) => {
            // Optionally successda narsa qilsa bo'ladi
        },
        onError: (error) => {
            console.error(error);
        }
    });

    return {
        isLoading,
        data,
        error,
        refetch
    };
};

export default useGetOneQuery;
