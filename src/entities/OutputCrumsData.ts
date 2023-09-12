
export type OutputCrumsDataType = {
    id : string 
    num : number
    title : string
    subTitle : string
    }
    
export const outputCrumsData : Array<OutputCrumsDataType> = [
    {
        id: "search",
        num : 1,
        title : "ПОИСК",
        subTitle : "Выберите машину"
    },
    {
        id: "options",
        num : 2,
        title : "ДЕТАЛИ",
        subTitle : "Выберите опции"
    },
    {
        id: "pay",
        num : 3,
        title : "ОПЛАТА",
        subTitle : "Произведите оплату"
    },
    ]
    