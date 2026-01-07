module Jekyll
  module RemoveNumberPrefix
    def remove_number_prefix(input)
      return input if input.nil?
      input.gsub(/^\d+\.\s+/, '')
    end
  end
end

Liquid::Template.register_filter(Jekyll::RemoveNumberPrefix)
