import { APP_CONFIG } from "app/lib/config"
import { useTranslations } from "app/lib/hooks"
import { Language, LanguageCode } from "app/lib/models"
import { useState } from "react"

export const useSupportedLanguages = (
    onSuccess: (languages: Array<Language>) => void
) => {
    const T = useTranslations()
    const [isLoading, setLoading] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)
    
    return {
        isLoading,
        hasError,
        fetch: () => {
            setLoading(true)
            setHasError(false)

            fetch(`${APP_CONFIG.API_URL}/languages`)
                .then(response => {
                    if(response.ok) {
                        return response
                    }

                    throw response
                })
                .then(response => response.json())
                .then(languages => {
                    const allLanguages: Array<Language> = [
                        {
                            code: LanguageCode.Auto,
                            name: T.common.autoTranslate
                        }
                    ].concat(languages)

                    onSuccess(allLanguages)
                })
                .catch(() => {
                    setHasError(true)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }
}

export const useAutoDetectLanguage = (
    onSuccess: (useAutoDetectedLanguage: Array<Language>) => void
) => {
    const T = useTranslations()
    const [isLoading, setLoading] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    return {
        isLoading,
        hasError,
        fetch: (query: string) => {
            setLoading(true)
            setHasError(false)

            fetch(`${APP_CONFIG.API_URL}/detect`, {
                method: 'POST',
                body: JSON.stringify({
                    q: query
                }),
                headers: {
                    'Content-Type': 'application/x-www-from-urlencoded'
                }
            })
                .then(response => {
                    if(response.ok) {
                        return response
                    }

                    throw response
                })
                .then(response => response.json())
                .then(([useAutoDetectLanguage]) => onSuccess(useAutoDetectLanguage))
                .catch(() => {
                    setHasError(true)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }
}