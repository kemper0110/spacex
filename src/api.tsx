import {useQuery} from "@tanstack/react-query";
import {Benefit, Code} from "./features/section/benefit.ts";

type Menu = {
    id: number
    title: string
}
export const useMenu = () => (
    useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const response = await fetch('http://127.0.0.1:8000/menu/', {
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
            const response = await fetch('http://127.0.0.1:8000/benefits/', {
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