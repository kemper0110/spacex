import {useQuery} from "@tanstack/react-query";
import {Benefit, Code} from "./features/content/benefit.ts";

const baseURL = 'https://spacex-django-react.vercel.app'


type Menu = {
    id: number
    title: string
}
export const useMenu = () => (
    useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const response = await fetch(baseURL + '/menu/', {
                headers: {'Accept': 'application/json'}
            })
            if (!response.ok) throw new Error(response.statusText)
            return await response.json() as Menu[]
        },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
    })
)

type BenefitDto = {
    id: number
    code: string
}

export const useBenefits = () => (
    useQuery({
        queryKey: ["benefits"],
        queryFn: async () => {
            const response = await fetch(baseURL + '/benefits/', {
                headers: {'Accept': 'application/json'}
            })
            if (!response.ok) throw new Error(response.statusText)
            const dto = await response.json() as BenefitDto[]
            return dto.map(e => ({
                id: e.id,
                code: JSON.parse(e.code) as Code
            } as Benefit))
        }
    })
)