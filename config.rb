# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

# Sprockets
activate :sprockets

after_configuration do
    sprockets.append_path File.join( root, "bower_components/" )
end

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false, directory_index: false
page '/*.json', layout: false, directory_index: false
page '/*.txt', layout: false, directory_index: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Custom pages
page '/404', directory_index: false
page '/login', directory_index: false

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# News Proxy
data.news.each do |id, article|
  proxy "/news/#{id}/index.html", "/news/template.html", :locals => { :article => article }
end

ignore "/news/template.html"

# General configuration
# config[:url_root] = '//maat-digital.sites.grp.one'
config[:js_dir] = 'assets/js'
config[:css_dir] = 'assets/css'
config[:fonts_dir] = 'assets/fonts'
config[:images_dir] = 'assets/images'
config[:layouts_dir] = 'layouts'

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# activate :search_engine_sitemap do |sitemap|
#   sitemap.exclude_attr = 'hide_sitemap'
#   sitemap.default_priority = 0.5
#   sitemap.default_change_frequency = 'monthly'
#   sitemap.process_url = -> (url) {
#     url.chomp('/')
#   }
#   sitemap.exclude_if = ->(resource) {
#     resource.url.start_with?("/assets/") || resource.url.start_with?("/error/")
#   }
# end

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings
configure :build do
  activate :relative_assets
  set :relative_links, true

  activate :minify_css
  activate :minify_javascript
  activate :gzip

  # Append a hash to asset urls (make sure to use the url helpers)
  activate :asset_hash
  # activate :asset_host, :host => config[:url_root]
end

# MUST be after :18n and :blog activation
activate :directory_indexes
