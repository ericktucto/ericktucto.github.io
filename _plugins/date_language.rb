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
            end
            date
        end
    end
end

Liquid::Template.register_filter(Jekyll::DateLanguage)