

type extData = {
    date: string,
    description: string,
    value?: number,
    saldo?: number
}

export const ExtratoData: extData[] = [
    {
        date: "22/06",
        description: "Saque 24h 012345",
        value: -300.00
    },
    {
        date: "22/06",
        description: "Saldo do dia ",
        saldo: 1500.00
    },
    {
        date: "22/06",
        description: "Farmácia 24h 012345",
        value: -200.00
    },
    {
        date: "22/06",
        description: "Supermercados 24h 012345",
        value: -300.00
    },
    {
        date: "22/06",
        description: "Saldo do dia",
        saldo: 2000.00
    },
    {
        date: "22/06",
        description: "Depósito",
        value: 2000.00
    }
]
