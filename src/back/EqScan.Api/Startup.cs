using EqScan.Api.Models;
using EqScan.Common;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.OData;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;
using Microsoft.OpenApi.Models;

namespace EqScan.Api
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            var connectionString = GetConnectionString();
            services.AddDbContext<EqScanDbContext>(opt =>
                opt.UseSqlServer(connectionString));

            services.AddControllers()
                .AddOData(opt => opt.AddRouteComponents("odata", GetEdmModel()));

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "eqscan.api", Version = "v1" });
            });
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

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment()) app.UseDeveloperExceptionPage();

            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "eqscan.api v1"));

            app.UseHttpsRedirection();
            app.UseRouting();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }

        private static IEdmModel GetEdmModel()
        {
            var builder = new ODataConventionModelBuilder();
            builder.EntitySet<Unit>("Units");
            builder.EntitySet<Contact>("Contacts");
            return builder.GetEdmModel();
        }
    }
}