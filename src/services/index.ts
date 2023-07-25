import { ContactProps } from "@/@types"

export const sendMessageContact = async (data: ContactProps) => {
    try {
        const res = await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const json = await res.json()

        if (res.ok) {
            return { response: json }
        } else {
            return { error: json.error }
        }
    } catch (error) {
        return { error: 'Aconteceu algum erro!' };
    }
}