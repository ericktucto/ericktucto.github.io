module Jekyll
    module ImageYouTube
        def image_youtube(idVideo)
            if idVideo == "coming-soon"
                'https://ik.imagekit.io/0l9xz00bkkiqh/coming-soon_B1YajCPmV.jpeg'
            else
                "https://img.youtube.com/vi/#{idVideo}/default.jpg"
            end
        end
    end
end

Liquid::Template.register_filter(Jekyll::ImageYouTube)
