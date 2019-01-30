module Jekyll
    module DateLanguage
        def date_es(date)
            case date
            when "Jan"
                "Ene"
            when "Apr"
                "Abr"
            when "Aug"
                "Ago"
            when "Sep"
                "Set"
            when "Dec"
                "Dic"
            when "January"
                "Enero"
            when "February"
                "Febrero"
            when "March"
                "Marzo"
            when "April"
                "Abril"
            when "May"
                "Mayo"
            when "June"
                "Junio"
            when "July"
                "Julio"
            when "August"
                "Agosto"
            when "September"
                "Setiembre"
            when "October"
                "Octubre"
            when "November"
                "Noviembre"
            when "December"
                "Diciembre"
            else
                date
            end
        end
    end
end

Liquid::Template.register_filter(Jekyll::DateLanguage)
