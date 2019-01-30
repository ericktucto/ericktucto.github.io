module Jekyll
    module Str255
        def str_255(string)
            if string.length > 255
                string[0, 255] + " ..."
            else
                string
            end
        end
    end
end

Liquid::Template.register_filter(Jekyll::Str255)
