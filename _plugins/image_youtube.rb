module Jekyll
    module ImageYouTube
        def image_youtube(idVideo)
            if idVideo == "coming-soon"
                absolute_url('/assets/images/coming-soon.jpeg')
            else
                "https://img.youtube.com/vi/#{idVideo}/default.jpg"
            end
        end
    end
end

Liquid::Template.register_filter(Jekyll::ImageYouTube)