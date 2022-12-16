using HomeChef.DataAccess;

namespace HomeChef.Api;

public class CreateInitialDataIfDbIsEmptyBgService : IHostedService
{
    private readonly ILogger _logger;
    private readonly IServiceProvider _serviceProvider;

    public CreateInitialDataIfDbIsEmptyBgService(IServiceProvider serviceProvider, ILogger<CreateInitialDataIfDbIsEmptyBgService> logger)
    {
        _serviceProvider = serviceProvider;
        _logger = logger;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        using var scope = _serviceProvider.CreateScope();
        _logger.LogWarning("Ensuring database exists...");
        var dbContext = scope.ServiceProvider.GetRequiredService<HomeChefContext>();
        dbContext.Database.EnsureCreated();

        _logger.LogWarning("Ensuring initial admin user exists when db is newly created...");
    }

    public Task StopAsync(CancellationToken cancellationToken) => Task.CompletedTask;
}