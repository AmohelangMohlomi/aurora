{/* Resources List */}
<div className="space-y-3 md:space-y-4">
  {filteredResources.length === 0 ? (
    <Card className="glass-card p-8 text-center">
      <p className="text-muted-foreground">
        No resources found matching your criteria.
      </p>
    </Card>
  ) : (
    filteredResources.map((resource) => (
      <Card
        key={resource.id}
        className="glass-card p-4 md:p-6 hover:shadow-lg transition-all duration-200 hover:scale-[1.01]"
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-quicksand font-semibold mb-1">
                  {resource.name}
                </h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{resource.region}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span>{resource.language.join(", ")}</span>
              </div>
              <div>
                <span className="px-2 py-1 bg-secondary/20 text-secondary rounded text-xs">
                  {resource.type}
                </span>
              </div>
            </div>
          </div>

          <a
            href={`tel:${resource.contact}`}
            className="px-6 py-3 bg-primary hover:bg-primary/90 rounded-lg font-semibold transition-colors text-primary-foreground text-center whitespace-nowrap"
          >
            Call {resource.contact}
          </a>
        </div>
      </Card>
    ))
  )}
</div>

