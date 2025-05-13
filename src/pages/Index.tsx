import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTab, setActiveTab] = useState("mansion");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1570396662990-ec36f82f7e52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-dark-brown/30" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="font-cormorant text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Усадьба "Золотой Век"
          </h1>
          <Separator className="w-24 bg-gold h-0.5 mb-6" />
          <p className="font-alegreya max-w-2xl text-lg md:text-xl mb-8">
            Погрузитесь в атмосферу дворянской жизни XVIII века в
            отреставрированной усадьбе, где время остановилось и ждёт своих
            гостей.
          </p>
          <Button
            className="bg-burgundy hover:bg-burgundy/90 text-white font-medium text-lg px-6 py-6"
            onClick={() => {
              const element = document.getElementById("explore");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Узнать больше
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section id="explore" className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-dark-brown mb-4">
            Откройте для себя историю
          </h2>
          <p className="font-alegreya text-lg text-brown max-w-3xl mx-auto">
            Наша усадьба приглашает вас совершить путешествие во времени и
            познакомиться с жизнью русского дворянства XVIII века.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeTab === "mansion" ? "default" : "outline"}
            className={`font-cormorant text-lg px-6 py-4 ${activeTab === "mansion" ? "bg-burgundy text-white" : "border-burgundy text-burgundy hover:bg-burgundy/10"}`}
            onClick={() => handleTabChange("mansion")}
          >
            Главный дом
          </Button>
          <Button
            variant={activeTab === "tavern" ? "default" : "outline"}
            className={`font-cormorant text-lg px-6 py-4 ${activeTab === "tavern" ? "bg-burgundy text-white" : "border-burgundy text-burgundy hover:bg-burgundy/10"}`}
            onClick={() => handleTabChange("tavern")}
          >
            Трактир
          </Button>
          <Button
            variant={activeTab === "hotel" ? "default" : "outline"}
            className={`font-cormorant text-lg px-6 py-4 ${activeTab === "hotel" ? "bg-burgundy text-white" : "border-burgundy text-burgundy hover:bg-burgundy/10"}`}
            onClick={() => handleTabChange("hotel")}
          >
            Гостиница
          </Button>
        </div>

        {/* Content Sections */}
        <div className="animate-fade-in">
          {activeTab === "mansion" && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden h-96">
                <img
                  src="https://images.unsplash.com/photo-1604514813549-fbb1cc732663?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Главный дом усадьбы"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-cormorant text-3xl font-bold text-dark-brown mb-4">
                  Главный дом
                </h3>
                <p className="font-alegreya text-base text-brown mb-6">
                  Построенный в 1765 году архитектором Василием Баженовым,
                  главный дом усадьбы является образцом классической архитектуры
                  эпохи Екатерины II. Отреставрированные интерьеры сохраняют
                  подлинную атмосферу того времени с антикварной мебелью,
                  картинами и предметами быта.
                </p>
                <div className="font-alegreya mb-2 flex items-center text-brown gap-2">
                  <Icon name="Clock" className="text-burgundy" />
                  <span>
                    Часы работы: 10:00 - 18:00 (вт-вс), понедельник — выходной
                  </span>
                </div>
                <div className="font-alegreya mb-2 flex items-center text-brown gap-2">
                  <Icon name="Phone" className="text-burgundy" />
                  <span>Телефон: +7 (495) 123-45-67</span>
                </div>
                <div className="font-alegreya mb-2 flex items-center text-brown gap-2">
                  <Icon name="Mail" className="text-burgundy" />
                  <span>Почта: mansion@goldage.ru</span>
                </div>
                <div className="font-alegreya flex items-center text-brown gap-2">
                  <Icon name="MapPin" className="text-burgundy" />
                  <span>
                    Адрес: Московская обл., с. Заречье, ул. Дворянская, д. 1
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tavern" && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden h-96">
                <img
                  src="https://images.unsplash.com/photo-1563277552-c7661483193d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Трактир усадьбы"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-cormorant text-3xl font-bold text-dark-brown mb-4">
                  Трактир "Боярский"
                </h3>
                <p className="font-alegreya text-base text-brown mb-6">
                  Старинный трактир, воссозданный по архивным документам,
                  предлагает гостям отведать блюда русской дворянской кухни
                  XVIII-XIX веков. Каждое блюдо готовится по оригинальным
                  рецептам с использованием традиционных ингредиентов. Интерьер
                  трактира с деревянными балками, медной посудой и свечами
                  создает неповторимую атмосферу прошлого.
                </p>
                <div className="font-alegreya mb-2 flex items-center text-brown gap-2">
                  <Icon name="Clock" className="text-burgundy" />
                  <span>Часы работы: 12:00 - 23:00 (ежедневно)</span>
                </div>
                <div className="font-alegreya mb-2 flex items-center text-brown gap-2">
                  <Icon name="Phone" className="text-burgundy" />
                  <span>Телефон: +7 (495) 987-65-43</span>
                </div>
                <div className="font-alegreya mb-2 flex items-center text-brown gap-2">
                  <Icon name="Mail" className="text-burgundy" />
                  <span>Почта: tavern@goldage.ru</span>
                </div>
                <div className="font-alegreya flex items-center text-brown gap-2">
                  <Icon name="MapPin" className="text-burgundy" />
                  <span>
                    Адрес: Московская обл., с. Заречье, ул. Дворянская, д. 3
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "hotel" && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden h-96">
                <img
                  src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Гостиница усадьбы"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-cormorant text-3xl font-bold text-dark-brown mb-4">
                  Гостиница "Дворянское гнездо"
                </h3>
                <p className="font-alegreya text-base text-brown mb-6">
                  Бывший гостевой флигель усадьбы превращен в комфортабельную
                  гостиницу, сохранившую исторический облик. Каждый из 20
                  номеров оформлен в стиле определенной исторической эпохи с
                  современными удобствами. Гости могут ощутить себя настоящими
                  дворянами, живя в аутентичной обстановке с видом на парк
                  усадьбы.
                </p>
                <div className="font-alegreya mb-2 flex items-center text-brown gap-2">
                  <Icon name="Clock" className="text-burgundy" />
                  <span>Регистрация заезда: с 14:00, выезд до 12:00</span>
                </div>
                <div className="font-alegreya mb-2 flex items-center text-brown gap-2">
                  <Icon name="Phone" className="text-burgundy" />
                  <span>Телефон: +7 (495) 456-78-90</span>
                </div>
                <div className="font-alegreya mb-2 flex items-center text-brown gap-2">
                  <Icon name="Mail" className="text-burgundy" />
                  <span>Почта: hotel@goldage.ru</span>
                </div>
                <div className="font-alegreya flex items-center text-brown gap-2">
                  <Icon name="MapPin" className="text-burgundy" />
                  <span>
                    Адрес: Московская обл., с. Заречье, ул. Дворянская, д. 5
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-dark-brown text-cream py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-center mb-12">
            Что мы предлагаем
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-cream/5 border-gold/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                    <Icon name="Landmark" size={32} className="text-gold" />
                  </div>
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-center text-gold mb-2">
                  Экскурсии
                </h3>
                <p className="font-alegreya text-center">
                  Погрузитесь в историю с нашими тематическими экскурсиями по
                  усадьбе и окрестностям.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream/5 border-gold/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                    <Icon name="Utensils" size={32} className="text-gold" />
                  </div>
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-center text-gold mb-2">
                  Гастрономия
                </h3>
                <p className="font-alegreya text-center">
                  Отведайте блюда, приготовленные по старинным рецептам русской
                  дворянской кухни.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream/5 border-gold/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                    <Icon name="Calendar" size={32} className="text-gold" />
                  </div>
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-center text-gold mb-2">
                  Мероприятия
                </h3>
                <p className="font-alegreya text-center">
                  Участвуйте в костюмированных балах, музыкальных вечерах и
                  исторических реконструкциях.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-burgundy text-cream py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="font-cormorant text-3xl font-bold">
                Усадьба "Золотой Век"
              </h2>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-gold">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-gold">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
          <Separator className="my-6 bg-cream/20" />
          <div className="text-center font-alegreya">
            <p>© 2025 Усадьба "Золотой Век". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
