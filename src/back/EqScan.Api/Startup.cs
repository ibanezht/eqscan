using EqScan.Api.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace EqScan.Api
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<EqScanDbContext>(builder => { builder.UseSqlServer(GetConnectionString()); });
            services.AddAutoMapper(typeof(Startup));

            services.AddControllers();

            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo { Title = "eqscan.api", Version = "v1" });
            });
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment()) app.UseDeveloperExceptionPage();
            
            app.UseRouting();
            app.UseEndpoints(builder => { builder.MapControllers(); });
            
            app.UseSwagger();
            app.UseSwaggerUI(options => options.SwaggerEndpoint("/swagger/v1/swagger.json", "eqscan.api v1"));
        }
        
        private static string GetConnectionString()
        {
            var builder = new SqlConnectionStringBuilder
            {
                UserID = "sa",
                Password = "P@ssw0rd",
                DataSource = ".",
                InitialCatalog = "eqscan"
            };
            return builder.ToString();
        }
    }
}